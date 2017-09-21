# JavaScript notes
## Caracteres especiales de espaciado
- salto de línea(\n)
- tabulación (\t)
# Introducción a JS.
- Javascript se ejecuta de forma diferente en distintos navegadores ya que usan distinto motores.  
- Es un Lenguaje no tipado.
- Es un lenguaje semántico, más facil de entender.
- Es un lenguaje interpretado, no compilado.
  
# Variables de JavaScript.
- Las variables son ***key sensitive***, ,diferencian entre MAYUSCULAS Y minusculas
- Tipos de datos en JS.
    - Number Los raros(NaN Undefined)
    - string
    - bolean (True False)
    - Undefined
    - Null
- El resto ve datos son ***OBJETOS***
    - array
    - objeto literal
    - función
# OPERADORES
    - Aritmeticos ( + - * / % ++ --) (operadores combinados(+= etc))
    - Lógicos(negación(!) and (&&) or (||))
    - Comparación (igualdad(==) igualdad y tipo(===) no igual(!=) no igual y tipo(!==) mayor (>) menor (<) )
    -Operador ternario(var result = (var === 1) ? "a is one" : "a is NOT one")(es necesario que se pasen 2 valores)
# 

# BUCLES
## BUCLE FOR
- Sintaxis for ( inicialización ; comprobación ; incremento/decrimento)
- Los bucles for se pueden anidar

# FUNCIONES
## Scope

- Cada función tiene acceso a sus variables locales, y a todas las variables heredadas de sus padres.
- El scouting se crea en el momento de definir la función no a la hora de ejecutarla.
## Variables privadas poer defecto en caso de ausencia de arguments
- Esta variable se declara a 10 en caso de que no esté declarada, en caso de que esté declarada, se queda con su actual valor.
 ```js
    var a = a || 10
 ```
# Array
- Eliminamos el valor de una de las posiciones de una array conservando su posición
```js
    delete myarray[1]
```

# Objects
- ```this``` apunta al objeto que lo contiene.
- Las funciones constructoras deben emprezar con una mayuscula:
    ```js
        function Person(name, city){
            this.name = name,
            this.city = city
        }

    ```

- Las variables globales dse gueardan en el objeto window, por lo que podemos tratar todas las variables globales como un objeto.   
 
    ```js
        js
 var school = "skylab"
 console.log(window.school) //skylab

    ```
 - Cuando utilizamos un constructor de objetos y no usamos ``` new ``` a la hora de crear el objeto, lo crea en el objeto ``` windows ```

- forEach (item(Objeto a tratar) , index(devuelve la posición del objeto a tratar) , array(Devuelve el array completo))
```js
    Array(100).fill(0).map( function(item, index, array){
        return Math.floor(Math.random()* array.length)
        })
```
# Prototype MOLA!