# 🎉 Challenge: Sorteo de Amigos Secretos - ONE G8 🎉

Este proyecto es parte del **Challenge Amigo Secreto** del programa **ONE G8 (Oracle Next Education)** de **Alura Latam y Oracle**.  
Se trata de una aplicación en JavaScript que permite agregar nombres a una lista y seleccionar aleatoriamente un amigo secreto.

![Captura de pantalla 2025-02-28 230253](https://github.com/user-attachments/assets/924123fe-33d6-4445-a884-c07af01de195)
![Captura de pantalla 2025-02-28 230304](https://github.com/user-attachments/assets/2916b97d-ddaa-4a55-a8c3-1795b77709f4)


---

## 📌 Funcionamiento del Sorteo

### 🔄 Mezcla Aleatoria (Algoritmo de Fisher-Yates)

Para garantizar un sorteo justo, utilizamos el **algoritmo de Fisher-Yates** para mezclar los nombres antes de seleccionar al amigo secreto:

```js
for (let i = amigosCopia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]];
}
```

### 🔍 Explicación Paso a Paso
Se inicia el bucle desde el último índice `(amigosCopia.length - 1)` y se decrementa hasta 1.

En cada iteración:
- Se elige un índice aleatorio `j` entre `0` e `i`.
- Se intercambia `amigosCopia[i]` con `amigosCopia[j]`.
- El proceso continúa hasta que `i = 1`.
- No es necesario mezclar cuando `i = 0`, ya que los intercambios previos garantizan una mezcla adecuada.

### 🧩 Ejemplo con `[A, B, C, D]`

| Iteración | `i` | `j` (aleatorio) | Intercambio | Resultado      |
|-----------|----|---------------|------------|----------------|
| 1         | 3  | 1             | D <-> B    | `[A, D, C, B]` |
| 2         | 2  | 0             | C <-> A    | `[C, D, A, B]` |
| 3         | 1  | 0             | D <-> C    | `[D, C, A, B]` |

Al final, `amigosCopia` está completamente mezclado.

## 🎯 Selección del Amigo Secreto

Después de mezclar el array, se elige un nombre al azar:

```javascript
const amigoSecreto = amigosCopia[Math.floor(Math.random() * amigosCopia.length)];
```

## 📖 Paso a Paso

1. `Math.random()` genera un número decimal aleatorio entre `0` y `1` (por ejemplo, `0.732`, `0.124`, `etc.`).
2. Multiplicamos por `amigosCopia.length`, obteniendo un número entre `0` y `amigosCopia.length - 1`. Por ejemplo, si `amigosCopia.length = 4`, entonces `Math.random() * 4` generará un número decimal entre `0` y `3.99999....`.
3. `Math.floor()` redondea el número hacia abajo, obteniendo un número entero entre `0` y `amigosCopia.length - 1`, para obtener un índice entero válido. Siguiendo con el ejemplo anterior, el redondeo seria `3`.

### 📌 Ejemplo con `amigosCopia = ['Ana', 'Luis', 'Carlos', 'Elena']`

| `Math.random()` | `Math.random() * 4` | `Math.floor()` | Índice Seleccionado | Elemento (Nombre) Seleccionado |
|---------------|------------------|--------------|-----------------|------------------|
| 0.123        | 0.492            | 0            | `amigosCopia[0]` | `"Ana"`          |
| 0.678        | 2.712            | 2            | `amigosCopia[2]` | `"Carlos"`       |
| 0.987        | 3.948            | 3            | `amigosCopia[3]` | `"Elena"`        |

## 🚀 Cómo Usarlo

1. Agrega nombres a la lista.
2. Presiona el botón de sorteo.
3. Se mostrará el nombre del amigo secreto en pantalla.

Este proyecto es una solución sencilla pero efectiva para realizar un sorteo justo y aleatorio de amigos secretos. 🎁✨

Autor: TheDanilore
