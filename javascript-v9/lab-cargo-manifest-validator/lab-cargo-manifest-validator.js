var normalizeUnits = (manifest) => {
  var obj = { ...manifest };
  if (obj.unit == "lb") {
    obj.weight = obj.weight * 0.45;
    obj.unit = "kg";
  }

  return obj;
}

var validateManifest = (manifest) => {
  var obj = {};
  if ("containerId" in manifest) {
    if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
      obj["containerId"] = "Invalid"
    }
  } else {
    obj["containerId"] = "Missing";
  }

  if ("destination" in manifest) {
    var dest = manifest.destination;
    if (typeof dest != "string" || dest.trim() == "") {
      obj["destination"] = "Invalid"
    }
  } else {
    obj["destination"] = "Missing";
  }

  if ("weight" in manifest) {
    if (typeof manifest.weight != "number"
    || Number.isNaN(manifest.weight) || manifest.weight <= 0) {
      obj["weight"] = "Invalid"
    }
  } else {
    obj["weight"] = "Missing";
  }

  if ("unit" in manifest) {
    if (typeof manifest.unit != "string"
    || (manifest.unit != "lb" && manifest.unit != "kg")) {
      obj["unit"] = "Invalid"
    }
  } else {
    obj["unit"] = "Missing";
  }

  if ("hazmat" in manifest) {
    if (typeof manifest.hazmat != "boolean") {
      obj["hazmat"] = "Invalid"
    }
  } else {
    obj["hazmat"] = "Missing";
  }

  return obj;
}

var processManifest  = (manifest) => {
  const obj = validateManifest(manifest);
  if (Object.keys(obj).length === 0) {
    const obj2 = normalizeUnits(manifest);
    console.log(`Validation success: ${obj2.containerId}`);
    console.log(`Total weight: ${obj2.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(obj);
  }
}