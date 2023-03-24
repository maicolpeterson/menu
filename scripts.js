cliques_op1 = 0   // Variável global
cliques_op2 = 0

function Descer()
{
    cliques_op2 = cliques_op2 + 1;
    if(cliques_op2 == 1)
    {
        menu2.classList.remove("recolhe");
        menu2.classList.add("inicia");
    }
    else{
        menu2.classList.remove("inicia");
        menu2.classList.add("recolhe");
        cliques_op2 = 0;
    }
}

function MostrarMenu1()
{
    cliques_op1 = cliques_op1 + 1;
    if(cliques_op1 == 1)
    {
        menu1.style.top = "0px";
    }
    if(cliques_op1 == 2)
    {
        menu1.style.top = "-150px";
        cliques_op1 = 0;
    }
}