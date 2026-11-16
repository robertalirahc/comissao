# Portal do acervo - GitHub Pages

Versão independente do portal do ChatGPT, nas cores preto e vermelho. Contém busca de arquivos e os 18 modelos de referências. A pesquisa específica por pessoa foi removida.

## Publicação

1. Descompacte este ZIP no computador.
2. Crie um repositório no GitHub e envie os arquivos desta pasta para a raiz do repositório (não envie o ZIP).
3. Confirme que index.html, acesso.js, acesso.css e acervo.enc estão juntos na raiz. Inclua também .nojekyll, se o gerenciador mostrar esse arquivo.
4. No GitHub, abra Settings > Pages.
5. Em Build and deployment, escolha Deploy from a branch; selecione main e /(root); clique Save.
6. Aguarde a publicação e abra o endereço HTTPS mostrado pelo GitHub.
7. Digite a senha compartilhada fornecida pela responsável pelo portal.

Não há instalação de dependências nem etapa de build. Não abra index.html por duplo clique: a descriptografia requer HTTPS ou localhost e o carregamento de acervo.enc via HTTP.

## Como o acesso funciona

O acervo e a aplicação estão criptografados em acervo.enc (AES-256-GCM). A chave é derivada da senha por PBKDF2-HMAC-SHA256 com 600.000 iterações e um salt aleatório. Não há cópia aberta do acervo nem senha literal no pacote. A senha não é enviada para servidor: a descriptografia ocorre no navegador. Ela será solicitada ao recarregar a página. O botão Sair recarrega a página e retorna à tela de acesso. O aplicativo não guarda a senha em cookies ou armazenamento local.

## Limites importantes

- Este é um arquivo criptografado com senha compartilhada, não autenticação individual de usuários.
- Uma senha curta, previsível ou divulgada permite tentativas offline de descoberta da senha. Use uma senha longa e exclusiva caso precise de confidencialidade forte.
- Toda pessoa que conhece a senha pode copiar, salvar ou divulgar o conteúdo aberto. Não há revogação individual, auditoria ou bloqueio real de tentativas.
- Trocar a senha exige gerar novamente o arquivo criptografado e o arquivo de configuração. Isso não remove cópias antigas nem o histórico do Git.
- Nunca adicione os arquivos originais data.js, o acervo descriptografado ou a senha ao repositório.
- As permissões dos documentos no Google Drive continuam independentes: esta senha não concede acesso a documentos restritos.
- Para controle institucional de acesso, prefira autenticação individual e autorização em servidor.

## Atualizações

O pacote é uma cópia desta versão do portal. Não sincroniza automaticamente com o portal do ChatGPT, planilhas ou Google Drive. Para alterar o inventário, o conteúdo criptografado precisa ser regenerado a partir da fonte atualizada.
