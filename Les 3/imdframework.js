/*//prototype is de parentklasse/basisklasse
HTMLElement.prototype.css = function(property, value) {
    this.style[property] = value;
};*/

//als we van prototype willen blijven kunnen we ook een eigen element aanmaken. (veiliger voor conflicten na updates enzovoort)
function IMDElement(el)
{
    this.el = el;
    //korte if else =>
    if(el[0] != undefined)
    {
        this.isArray = true;
    }
    else
    {
        this.isArray = false;
    }
}

IMDElement.prototype.click = function(action)
{
    if (this.isArray)
    {
        for (var i = 0; i < this.el.length; i++)
        {
            this.el[i].addEventListener("click", action);
        }
    }
    else
    {
        this.el.addEventListener("click", action);
    }
}

IMDElement.prototype.css = function(prop, value)
{
    if (this.isArray)
    {
        for (var i = 0; i < this.el.length; i++)
        {
            this.el[i].style[prop] = value;
        }
    } else {
        this.el.style[prop] = value;
    }
};

function $(selector)
{
    var firstChar = selector.substring(0,1);
    switch(firstChar)
    {
            case "#":
                var whatToSelect = selector.substring(1, selector.length);
                return new IMDElement(document.getElementById(whatToSelect));
                break;

            default:
                return new IMDElement(document.getElementsByTagName(selector));
                break;
    }
}
