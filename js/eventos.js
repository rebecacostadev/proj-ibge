fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
    .then( res => res.json())
    .then(regioes => {
        function addOption(cada) {
            select_regiao.innerHTML += `<option value="${cada.id}">${cada.nome}</option>`
        }

        regioes.forEach(addOption);
    });


    function buscarEstados() {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades//regioes/${select_regiao.value}/estados`)
            .then( res => res.json())
            .then(estados => {
        select_estados.innerHTML = "<option> -- Selecione --</option>"
        select_cidades.innerHTML = "<option> -- Selecione --</option>"
        function addOption(cada) {
            select_estados.innerHTML += `<option value='${cada.id}'>${cada.nome}</option>`
        }

        estados.forEach(addOption);
    });
    }

    
    function buscarCidades() {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${select_estados.value}/municipios`)
            .then( res => res.json())
            .then(cidades => {
        select_cidades.innerHTML = "<option> -- Selecione --</option>"

        function addOption(cada) {
            select_cidades.innerHTML += `<option value='${cada.id}'>${cada.nome}</option>`
        }
        cidades.forEach(addOption);
    });
    }
        

