let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

function addLivros(){


    const adicionarlivros = books.map(function(item){  
        //tratando a data e as paginas
        const booksPages = !item.pages ? "-" : item.pages;
        const data = new Date(item.published);
        data.setDate(data.getDate() + 1);
        const dataBr = data.toLocaleDateString('pt-br');
        
        //adicionando a lista de livros na pagina
            return `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.author}</td>
                        <td>${item.isbn}</td>
                        <td>${dataBr}</td>
                        <td>${booksPages}</td>
                        <td><button class="delete"> Remover</button></td>
                    </tr>
                `
        });
        document.querySelector("#addTabela tbody").innerHTML = adicionarlivros.join("");
    }

addLivros();


function dadosFormulario(event) {
    event.preventDefault();

    let addLivro = document.getElementById('titulo').value;
    let addAutor = document.getElementById('autor').value;
    let addIsbn = document.getElementById('isbn').value;
    let addData = document.getElementById('data').value;
    let addPaginas = document.getElementById('paginas').value



    if (addLivro === "" ||addAutor === "" || addIsbn === "" || addPaginas === "") {
    alert("Preencha as informações obrigatórias faltantes")
} else {
    //adicionando novos livros
    books.push({   
            title: addLivro,
            author: addAutor,
            isbn: addIsbn,
            published: addData,
            pages: addPaginas,
    }); 
    limparDados();  
    addLivros(); 
    };
}

function  limparDados() {
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('data').value = "";
    document.getElementById('paginas').value = "";
}

document.getElementById('respostasFormulario').addEventListener('click', function(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})