This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Campus Move

Campus Move es una aplicación web desarrollada con React, Next.js 14 y Sanity. Esta aplicación permite a los usuarios interactuar con contratos inteligentes en la blockchain. Para inicializar y utilizar la aplicación, es necesario instalar Ganache y MetaMask.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Ganache
- MetaMask

## Instalación

Sigue estos pasos para instalar y configurar los requisitos necesarios.

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/campus-move.git
cd campus-move
```
## Instalar dependencias
```bash
npm install
npm run dev
```
Abrir http://localhost:3000/ para dar uso a la aplicación clonada

## Instalación de Ganache y MetaMask

### Instalación de Ganache

Ganache es una herramienta de desarrollo de blockchain que te permite ejecutar una blockchain localmente para pruebas y desarrollo.

1. Visita la página de descargas de Ganache: [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/).
2. Descarga el instalador adecuado para tu sistema operativo (Windows, macOS, Linux).
3. Ejecuta el instalador y sigue las instrucciones en pantalla para completar la instalación.
4. Una vez instalado, abre Ganache y haz clic en "Quickstart Ethereum" para iniciar una nueva cadena de bloques local.

### Instalación de MetaMask

MetaMask es una extensión de navegador que actúa como una billetera de criptomonedas y te permite interactuar con aplicaciones descentralizadas (dApps).

1. Visita la página de MetaMask: [https://metamask.io/](https://metamask.io/).
2. Haz clic en "Download" y selecciona la versión adecuada para tu navegador (Chrome, Firefox, Brave, Edge).
3. Sigue las instrucciones para instalar la extensión en tu navegador.
   
### Configuración de Ganache y MetaMask

#### Iniciar Ganache

1. Abre Ganache y selecciona "Quickstart Ethereum".
2. Copia la mnemotecnia (mnemonic) generada por Ganache.

#### Importar la cuenta en MetaMask

1. Abre MetaMask y haz clic en el ícono de perfil en la esquina superior derecha.
2. Selecciona "Importar cuenta".
3. Selecciona "Importar por frase de recuperación" y pega la mnemotecnia copiada de Ganache.
4. Haz clic en "Importar".

#### Configurar la red en MetaMask

1. Abre MetaMask y haz clic en el ícono de red en la esquina superior derecha.
2. Selecciona "Custom RPC".
3. Configura los siguientes campos:
   - **Network Name**: Ganache
   - **New RPC URL**: http://127.0.0.1:7545
   - **Chain ID**: 1337
   - **Currency Symbol**: ETH
4. Haz clic en "Guardar".

Ahora tienes Ganache y MetaMask configurados para interactuar con la blockchain local. Puedes proceder a inicializar y usar la aplicación.

## Realizar una Transacción para Adquirir un Vehículo

Para realizar una transacción y adquirir un vehículo en la aplicación Campus Move, deberás seguir estos pasos en la sección de selección del carro y confirmación de la compra:

1. Selecciona el vehículo que deseas comprar en la aplicación.
2. Al confirmar la compra, deberás escoger una de las direcciones de las wallets de Ganache para realizar la transacción.
3. Es importante que no uses la dirección a la que estás conectado actualmente. Se recomienda usar la 4ta o 5ta dirección de Ganache para procesar el pago.

### Ejemplo de Dirección de Retiro

Supongamos que estás conectado a la primera dirección de Ganache. Puedes utilizar la 4ta o 5ta dirección para la transacción. Aquí tienes un ejemplo de una dirección de retiro:

- 4ta Dirección: `0x4C5c6F56E4D982fAd8F7fefCfE1c2B6E4cF6789A`
- 5ta Dirección: `0x5D6E4A67B8F9b2E3d4C1F9B3E7f3E9D8C1f1D2E9`

**Nota**: Asegúrate de copiar correctamente la dirección que elijas y verificar que tienes fondos suficientes en la cuenta para completar la transacción.

### Pasos para Confirmar la Compra

1. En la sección de confirmación de compra, selecciona la opción para ingresar la dirección de retiro.
2. Introduce una de las direcciones recomendadas (4ta o 5ta).
3. Verifica los detalles de la transacción y confirma la compra.
4. MetaMask te pedirá que firmes y envíes la transacción desde la dirección que has seleccionado.

Una vez completada la transacción, el vehículo se transferirá a tu cuenta y recibirás una confirmación en la aplicación.


