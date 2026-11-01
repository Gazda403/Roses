import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

html_classes = set()
for match in re.finditer(r'class=["\']([^"\']+)["\']', html):
    for c in match.group(1).split():
        html_classes.add(c)

css_classes = set()
for match in re.finditer(r'\.([a-zA-Z0-9_\-]+)', css):
    css_classes.add(match.group(1))

missing_in_css = sorted(list(html_classes - css_classes))
print(f'Total classes in HTML: {len(html_classes)}')
print(f'Classes in HTML not directly in CSS: {len(missing_in_css)}')
for c in missing_in_css:
    print(' ', c)
