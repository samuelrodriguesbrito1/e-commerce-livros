export const cadastro = `
<header>Cadastro de Fornecedores&nbsp;&nbsp;|&nbsp;&nbsp;Novo Fornecedor</header>
<main class="cadastro-main">
    <form class="cadastro-form">
        <fieldset>
            <legend>Dados do Fornecedor</legend>
            <div class="cadastro-linha">
                <label for="code">Código:</label>
                <input class="campo-codigo" type="text" id="code" name="code" value="(gerado)" disabled>

                <label for="cnpj">CNPJ:</label>
                <input class="campo-cnpj" type="text" id="cnpj" name="cnpj" value="11.222.333/0001-44">
            </div>
            <div class="cadastro-linha">
                <label for="company">Razão Social:</label>
                <input class="campo-razao" type="text" id="company" name="company">

                <label for="fantasyName">Nome Fantasia:</label>
                <input class="campo-fantasia" type="text" id="fantasyName" name="fantasyName">
            </div>
            <div class="cadastro-linha">
                <label for="email">E-mail:</label>
                <input class="campo-email" type="email" id="email" name="email">
            </div>
        </fieldset>

        <fieldset>
            <legend>Telefone</legend>
            <div class="cadastro-linha">
                <label for="phoneType">Tipo:</label>
                <select class="campo-tipo-telefone" id="phoneType" name="phoneType">
                    <option value="commercial">Comercial</option>
                    <option value="residential">Residencial</option>
                    <option value="mobile">Celular</option>
                </select>

                <label for="ddd">DDD:</label>
                <input class="campo-ddd" type="text" id="ddd" name="ddd" maxlength="2">

                <label for="phone">Número:</label>
                <input class="campo-telefone" type="text" id="phone" name="phone">
            </div>
        </fieldset>

        <fieldset>
            <legend>Endereço</legend>
            <div class="cadastro-linha">
                <label for="streetType">Tipo Logradouro:</label>
                <select class="campo-tipo-logradouro" id="streetType" name="streetType">
                    <option value="street">Rua</option>
                    <option value="avenue">Avenida</option>
                    <option value="square">Praça</option>
                </select>

                <label for="street">Logradouro:</label>
                <input class="campo-logradouro" type="text" id="street" name="street">
            </div>
            <div class="cadastro-linha">
                <label for="number">Número:</label>
                <input class="campo-numero" type="text" id="number" name="number">

                <label for="complement">Complemento:</label>
                <input class="campo-complemento" type="text" id="complement" name="complement">

                <label for="neighborhood">Bairro:</label>
                <input class="campo-bairro" type="text" id="neighborhood" name="neighborhood">
            </div>
            <div class="cadastro-linha">
                <label for="zipCode">CEP:</label>
                <input class="campo-cep" type="text" id="zipCode" name="zipCode">

                <label for="city">Cidade:</label>
                <input class="campo-cidade" type="text" id="city" name="city">

                <label for="state">Estado:</label>
                <select class="campo-estado" id="state" name="state">
                    <option value=""></option>
                    <option value="SP">SP</option>
                    <option value="RJ">RJ</option>
                    <option value="MG">MG</option>
                    <option value="PR">PR</option>
                </select>
            </div>
            <div class="cadastro-linha">
                <label for="country">País:</label>
                <select class="campo-pais" id="country" name="country">
                    <option value="brazil">Brasil</option>
                </select>
            </div>
        </fieldset>

        <div class="cadastro-acoes">
            <button type="submit">Salvar</button>
            <button type="button">Cancelar</button>
        </div>
    </form>

    <section class="cadastro-usuario">
        <fieldset>
            <legend>Usuário</legend>
            <p>Samuel Rodrigues Brito / Administrador</p>
        </fieldset>
    </section>
</main>
<footer></footer>
`;