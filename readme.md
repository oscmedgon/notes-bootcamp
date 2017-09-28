# Markdown
- [Guia de marcado](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 
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

# Secuencias escapadas en strings
Quotes are not the only characters that can be escaped inside a string. Here is a table of common escape sequences:
```
Code    Output
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
```

# TDD


# la instrucción debuger es dios

#HTML5
- Lenguaje de marcado
- Estructura contenidos web
- tag a enlaza documentos
- www World Wide Web

# CSS3
## Selectores especiales CSS
- section p : selecciona a todos los párrafos hijos de un serction.
- section > p : Selecciona a todos los párrafos que sean hijos directos de un section.
- h2 ~ p : Selecciona a todos los párrafos que sean hermanos de un H2.
- h2 + p : Selecciona a todos los párrafos que hermanos de un h2 que a demás esté justo detras de el.
- a[target] : selecciona a cualquier enlace que tenga aplicado un atributo target
- a[href="google.es"] : selecciona todos los enlaces que su valor del href href google.es
- a[href*="car/"] : selecciona todos los enlaces que vinculen a la carpeta car.
- a[href^="https://"] :selecciona todos los enlaces que su referencia empieza por https
- a[href$="pdf"] :Selecciona todos los enlaces, que su referencia termina en pdf
- [Enlace a una guia de selectores CSS](https://learn.shayhowe.com/advanced-html-css/complex-selectors/)
-  "*" Selector universal
-  li:nth-child(2n) : selecciona los pares de una lista
-  li:nth-child(2n+1) : selecciona los impares de una lista
-  * ES DIOS

#elementos en bloque
- toman el 100% del ancho disponible.
- se colocan uno tras otro
- permie setear su tamaño

#elementos en línea
- toman el ancho necesario por el contenido.
- se colocan seguidos
- no permie setear su tamaño

## inline-block lo parte
# FlexBox es un dios de dioses
# BOOTSTRAP(Es un dios con esteroides)
- Librería de componentes(Elementos predefinidos).
- Ahorra tiempo.
- Responsive design.
- Sistema de grid de 12 columnas
## CLASES BOOTRSTRAP
    - .container
    - row (inicia el grid de columnas)
    - col-(xx)- (0-12)(offset-0-12){offset sirve para dejar un hueco entre el anterior elemento con el actual}
        - (xs , sm , md , lg) (resoluciones en las que actua)
            - xs res < 768px (Movil)
            - sm >=  768px (Tablet)
            - md >= 992px (Escritorio)
            - lg >= 1200px (ectritorio todo tocho)    
        - .hidden-(xs , sm , md , lg)
        - .visible-(xs , sm , md , lg)-*-(inline , block ...)
