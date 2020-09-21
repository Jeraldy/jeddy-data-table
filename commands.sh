## Compile
npm run compile

## Copy Types
xcopy /s lib\*.d.ts types\

## Copy Styles
xcopy /s src\styles\* lib\styles\

## Remove types from lib
rm -r lib\*.d.ts
rm -r lib\**\*.d.ts
rm -r lib\**\**\*.d.ts

rm -r lib\*.js.map
rm -r lib\**\*.js.map
rm -r lib\**\**\*.js.map

## Put back css types
xcopy /s src\css\*.d.ts lib\css\

## Publish Jeddy Library
cd lib

npm version patch
npm publish --access=public

cd..

git add .
git commit -m "option"
git push
