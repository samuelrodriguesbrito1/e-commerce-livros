export const inativar = `
<header>Cadastro de Fornecedores&nbsp;&nbsp;|&nbsp;&nbsp;Inativar Fornecedor</header>
<main class="inativar-main">
    <section class="inativar-conteudo">
        <p class="inativar-fornecedor"><strong>Fornecedor:&nbsp;&nbsp; F0003&nbsp;&nbsp; Leitura Distribuidora Ltda</strong></p>

        <form>
            <div class="inativar-categoria">
                <label for="category">Categoria:</label>
                <select id="category" name="category">
                    <option value="">Selecione</option>
                    <option value="financial">Financeiro</option>
                    <option value="contractual">Contratual</option>
                    <option value="other">Outro</option>
                </select>
            </div>

            <div class="inativar-justificativa">
                <label for="justification">Justificativa:</label>
                <textarea id="justification" name="justification"></textarea>
            </div>

            <div class="inativar-acoes">
                <button type="submit">Confirmar</button>
                <button type="button">Cancelar</button>
            </div>
        </form>
    </section>

    <section class="inativar-usuario">
        <fieldset>
            <legend>Usuário</legend>
            <p>Samuel Rodrigues Brito / Administrador</p>
        </fieldset>
    </section>
</main>
<footer></footer>
`;