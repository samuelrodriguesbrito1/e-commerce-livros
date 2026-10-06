export const search = `

<header>Cadastro de Fornecedores</header>
<main>
    <section class="search">
        <form>

            <div class="input">
                <label for="code">Código:</label>
                <input type="text" id="code" name="code">
            </div>

            <div class="input">
                <label for="company">Razão Social:</label>
                <input type="text" id="company" name="company">
            </div>

            <div class="input">
                <label for="fantasyName">Nome fantasia:</label>
                <input type="text" id="fantasyName" name="fantasyName">
            </div>

            <div class="input">
                <label for="cnpj">CNPJ:</label>
                <input type="text" id="cnpj" name="cnpj">
            </div>

            <div class="input">
                <label for="city">Cidade:</label>
                <input type="text" id="city" name="city">

                <label for="uf">Estado:</label>
                <select name="uf" id="uf">
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select> 

            </div>

            <div class="input-search">
                <div>
                    <label>Status</label>
                    <select>
                        <option value="active">Todos</option>
                    </select>
                </div>
                <button class="search-button" type="submit">Buscar</button>
            </div>
        </form>

    </section>
    <section id="user">
        <fieldset>
            <legend>Usuário</legend>
            <p>Samuel/Administrador</p>
        </fieldset>
    </section>
</main>
<footer></footer>

`;