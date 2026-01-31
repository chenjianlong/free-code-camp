# !/usr/bin/env python3

def add_setting(settings, item):
    key, value = [x.lower() for x in item]
    if key in settings:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    
    settings.update({key: value})
    return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting(settings, item):
    key, value = [x.lower() for x in item]
    if key not in settings:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

    settings.update({key: value})
    return f"Setting '{key}' updated to '{value}' successfully!"

def delete_setting(settings, key):
    key = key.lower()
    if key not in settings:
        return "Setting not found!"
    
    settings.pop(key)
    return f"Setting '{key}' deleted successfully!"

def view_settings(settings):
    if not len(settings):
        return "No settings available."
    
    res = "Current User Settings:\n"
    for key, value in settings.items():
        res += f"{key.capitalize()}: {value}\n"
    
    return res;

test_settings = {
    'theme': 'dark',
    'notifications':
    'enabled',
    'volume': 'high'
}

print(view_settings(test_settings))