const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const contractsRoot = path.join(__dirname, '..', 'contracts');

function collectSchemaFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return collectSchemaFiles(fullPath);
    }
    return entry.name.endsWith('.schema.json') ? [fullPath] : [];
  });
}

function loadSchemas() {
  return collectSchemaFiles(contractsRoot).map(filePath => {
    const raw = fs.readFileSync(filePath, 'utf8');
    const schema = JSON.parse(raw);
    const relativePath = path.relative(contractsRoot, filePath).replace(/\\/g, '/');
    schema.$id = schema.$id || relativePath;
    return { filePath, relativePath, schema };
  });
}

function validateSchemas() {
  const ajv = new Ajv({
    allErrors: true,
    strict: false
  });
  addFormats(ajv);

  const schemas = loadSchemas();
  schemas.forEach(({ schema }) => ajv.addSchema(schema));

  schemas.forEach(({ relativePath, schema }) => {
    ajv.compile(schema);
    console.log(`validated ${relativePath}`);
  });
}

try {
  validateSchemas();
  console.log('All contract schemas are valid.');
} catch (error) {
  console.error('Schema validation failed.');
  console.error(error && error.message ? error.message : error);
  process.exit(1);
}
