# 🚀 Guia Padrão de Deploy no Dokku

Para que qualquer aplicativo suba **instantaneamente e sem falhas** pelo Dokku a partir do nosso "Gerenciador VPS", basta seguir estas três regras simples de configuração no seu projeto ANTES de fazer o `git commit/push` para o GitHub e solicitar a sincronização.

## 1. O Padrão Universal de Porta (`PORT`)
Não defina portas estáticas no código. O Dokku, diferente do localhost que costuma rodar tudo pela porta 3000/5000 por exemplo, define externamente uma variável de ambiente chamada `$PORT` para cada contêiner virtual, e faz o roteamento Nginx da rede até ele.

Se você está em Nodejs:
```javascript
// ✅ CERTO
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Rodando a milhão`);
});

// ❌ ERRADO
app.listen(3333, "localhost");
```

## 2. A "Regra de Ouro": Procfile vs Start Scripts
Quando um compilador entra no seu projeto, a primeira coisa que ele precisa saber após baixar tudo é: *"Ok, mas como eu inicio a vida disso aqui?"*

Para tirar a ambiguidade da compilação e evitar preencher **Variáveis de Ambiente manualmente na UI de deploy** (`NIXPACKS_START_CMD`, etc.), a melhor prática da indústria é simplesmente criar e commitar um arquivo na **RAIZ** do repositório chamado `Procfile` (sem extensão) com o comando que inicializa o servidor. 

Isso informa diretamente o Dokku o tipo de processo (`web`: processo de site principal) e como interagir:

### Exemplo 1: Projetos Python / Streamlit (Como o Próprio Gerenciador VPS)
Crie um arquivo na raiz chamado `Procfile`:
```Procfile
web: streamlit run app.py --server.port $PORT --server.address 0.0.0.0
```

### Exemplo 2: Projetos NodeJS Tradicional
Crie um arquivo na raiz chamado `Procfile`:
```Procfile
web: npm run start
```

### Exemplo 3: Monorepos Modernos complexos (Bun/pnpm/Turbo)
Nos monorepos (como o *plataforma_converseia* com `apps/api`), o `start` não reside na mesma pasta raiz, por isso ocorre o clássico erro de `"start script not found"`.
Crie o arquivo na raiz chamado `Procfile` resolvendo isso (não precisa setar variável de ambiente nesse caso!):
```Procfile
web: bun --cwd apps/api run start
```

## 3. Versões Exatas de Linguagem (Não Dê Susto no Dokku)
Sempre declare qual a versão realística do motor que a aplicação precisa. 

**Para NodeJS**, coloque sempre o campo `engines` no seu arquivo `package.json`:
```json
{
  "engines": {
    "node": ">=22.x"
  }
}
```

**Para Projetos Python**, crie um arquivo solto na raiz do repositório chamado `runtime.txt` informando a versão minuciosa a ser baixada:
```txt
python-3.11.8
```

---

## 💡 Resumo do Fluxo Perfeito e Blindado:
1. Revise se o motor de porta `process.env.PORT` + bind no IP de escuta `0.0.0.0` estão sendo aplicados.
2. Crie e deixe na raiz o arquivo mágico `Procfile` revelando como puxar a faísca do seu banco de dados (`web: ...`).
3. Commit e *Push* código no Github (agora limpo e formatado).
4. No Painel da VPS, se for um monorepo exótico force a aba "Buildpack" para `Nixpacks`.
5. Vá na Sincronização do GitHub e rode o Cloner! Tudo subirá 100% automático.