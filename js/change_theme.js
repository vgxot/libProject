var buttonTheme = document.getElementById("button-theme");
var link = document.getElementById("night-theme");

buttonTheme.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let darkTheme = "statistics-night.css";
    let lightTheme = "statistics-light.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if(currTheme === lightTheme)
    {
        currTheme = darkTheme;
        theme = "statistics-night";

    }
    else
        currTheme = lightTheme;
    theme = "statistics-light";
    {

    }

    link.setAttribute("href", currTheme);
}