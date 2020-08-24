lista = list()
aux = list()
classeDependencias = []
i = 0
j = 1
while True:
    while True:
        dependencias = str(input('Dependencias ou Nn para sair: '))
        if dependencias in 'Nn':
            break
        aux.append(dependencias)
        print(aux)

    lista.append(aux)
    print(lista)
    aux = []

    print(len(lista))
    resp = str(input(' N para sair ou qualquer tecla para continuar: \n'))

    if resp in 'Nn':
        break

tam = len(lista) - 1
print(tam)


def resolvedor(lista, classe, dependencias):
    j = 0
    i = 1
    tam = len(lista) - 1
    for tam in lista:
        while (j < len(dependencias)):
            if(dependencias[i] == lista[i][j]):
                classeDependencias.append(lista[i][j])
                print("entrou")
            j = j+1
            i = i+1
            print("j ", + j)

    print(classeDependencias)


print(lista)
print(lista[0][0])
print(lista[0])


print(resolvedor(lista, lista[0][0], lista[0]))
