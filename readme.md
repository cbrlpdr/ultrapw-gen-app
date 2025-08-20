# UltraPW - Gerador de Senhas

UltraPW é um aplicativo mobile feito com **React Native e Expo** que gera senhas seguras de forma fácil e rápida.  

---

## Funcionalidades

- Gerar senhas aleatórias com letras, números e símbolos.
- Copiar senha para a área de transferência.
- Definir o tamanho da senha com um slider.
- Visualização da senha ao ser gerada.

---

## Tecnologias

- React Native
- Expo
- TypeScript
- Hooks (useState)

---

## Como rodar

1. Clone o repositório:

```bash
git clone https://github.com/cbrlpdr/ultrapw-gen-app
cd ultrapw
````

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode o app no Expo:

```bash
expo start
```

Abra no seu dispositivo ou emulador usando o app Expo Go.

---

## Estrutura

* `App.tsx` → ponto de entrada do app
* `components/` → componentes reutilizáveis (botão, slider, textfield, logo)
* `screens/` → telas principais (Home)
* `utils/` → funções auxiliares (geração de senha, clipboard)

---

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch com a feature: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha feature'`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request.

---

## Licença

MIT License
