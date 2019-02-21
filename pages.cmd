SET DIR=%~dp0
rm "%DIR%..\..\pages"
mklink /D "%DIR%..\..\pages" "%DIR%pages"