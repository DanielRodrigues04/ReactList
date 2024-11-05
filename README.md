# Lista com Paginação e Inserção de Itens - React Native

Este é um aplicativo simples desenvolvido com React Native que permite ao usuário inserir textos em uma lista, visualizar os itens inseridos, e carregar mais itens conforme necessário. O aplicativo também oferece a funcionalidade de limpar a lista e exibir a data e hora de cada inserção.

## Funcionalidades

- **Inserir Itens**: O usuário pode digitar um texto e clicar no botão **Inserir** para adicionar o item à lista.
- **Limpar Itens**: O usuário pode limpar todos os itens da lista clicando no botão **Limpar**.
- **Paginação**: A lista é exibida com um número limitado de itens por vez, e o usuário pode carregar mais itens conforme rola a página.
- **Exibição de Data e Hora**: Cada item inserido é acompanhado da data e hora em que foi adicionado.
- **Interface Responsiva**: O aplicativo foi desenvolvido com uma interface limpa e responsiva para dispositivos móveis.

## Como Usar

1. **Instalar Dependências**:
   - Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
   - Instale as dependências do projeto com o comando:

     ```bash
     npm install
     ```

2. **Rodar o Aplicativo**:
   - Para rodar o aplicativo no seu emulador ou dispositivo, execute o comando:

     ```bash
     npx react-native run-android   # Para Android
     npx react-native run-ios       # Para iOS
     ```

3. **Interações**:
   - Digite um texto no campo de entrada e clique no botão **Inserir** para adicionar à lista.
   - Use o botão **Limpar** para apagar todos os itens da lista.
   - Ao rolar a lista, mais itens serão carregados automaticamente (com base na paginação).

## Estrutura do Código

O projeto é composto por um componente principal `App` que gerencia o estado da lista de itens, a inserção de novos itens, e a lógica de paginação.

### Componentes e Funções Principais:

- **useState**: Usado para gerenciar o estado do texto digitado, da lista de itens, dos itens visíveis na tela e da página atual.
- **TextInput**: Componente de entrada de texto, onde o usuário digita os itens.
- **FlatList**: Usado para renderizar a lista de itens, com suporte à paginação e carregamento dinâmico.
- **TouchableOpacity**: Usado para criar os botões de ação (Inserir e Limpar).

### Funções:

- **handleInsert**: Adiciona o texto digitado à lista e atualiza os itens visíveis com base na paginação.
- **handleClear**: Limpa a lista de itens e redefine a paginação para a primeira página.
- **loadMoreItems**: Carrega mais itens ao rolar para o final da lista, com base na página atual e no número de itens por página.

### Estilos:

O aplicativo utiliza `StyleSheet` para estilizar a interface, garantindo uma aparência agradável e responsiva.

## Exemplo de Interface

Aqui está um exemplo de como a interface do aplicativo pode se parecer:

