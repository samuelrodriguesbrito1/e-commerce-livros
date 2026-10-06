export const resultado = `
<header>Cadastro de Fornecedores</header>
<main class="resultado-main">
    <section class="resultado-filtros" aria-label="Filtros de fornecedores">
        <form>
            <div class="resultado-filtro-principal">
                <label for="company">Razão Social:</label>
                <input type="text" id="company" name="company" value="Leitura">
            </div>

            <div class="resultado-status">
                <label for="status">Status:</label>
                <select id="status" name="status">
                    <option value="all">Todos</option>
                    <option value="active">Ativo</option>
                    <option value="inactive">Inativo</option>
                </select>
            </div>

            <button class="search-button" type="submit">Buscar</button>
        </form>

        <nav class="resultado-acoes" aria-label="Ações de fornecedor">
            <button type="button">Novo</button>
            <button type="button">Visualizar</button>
            <button type="button">Alterar</button>
            <button type="button">Inativar</button>
            <button type="button">Ativar</button>
        </nav>
    </section>

    <section class="resultado-tabela" aria-label="Fornecedores encontrados">
        <table>
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Razão Social</th>
                    <th scope="col">Nome Fantasia</th>
                    <th scope="col">CNPJ</th>
                    <th scope="col">Cidade/UF</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>F0003</td>
                    <td>Leitura Distribuidora Ltda</td>
                    <td>Leitura Livros</td>
                    <td>11.222.333/0001-44</td>
                    <td>São Paulo/SP</td>
                    <td>Ativo</td>
                </tr>
                <tr>
                    <td>F0007</td>
                    <td>Casa da Leitura Editorial S.A.</td>
                    <td>Casa Editorial</td>
                    <td>22.333.444/0001-55</td>
                    <td>Campinas/SP</td>
                    <td>Ativo</td>
                </tr>
                <tr>
                    <td>F0012</td>
                    <td>Boa Leitura Comércio Ltda</td>
                    <td>Boa Leitura</td>
                    <td>33.444.555/0001-66</td>
                    <td>Curitiba/PR</td>
                    <td>Inativo</td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="resultado-usuario">
        <fieldset>
            <legend>Usuário</legend>
            <p>Samuel Rodrigues Brito / Administrador</p>
        </fieldset>
    </section>
</main>
<footer></footer>
`;