// Завдання 1: Задано масив з числовими значеннями 2,-5,-9,2,-4,5,34,-11,2,3-,4,5,-6,9; В масиві визначити суму від’ємних елементів
let arr = [2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9],
    summ = 0
for (i = 0; i < arr.length; i++)
if (arr[i] < 0){
    summ += arr[i]
}
let root = document.getElementsByClassName('root')[0]
task1 = document.createElement('h4')
task1.innerHTML = `Завдання 1:
Задано масив з числовими значеннями 2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9;
В масиві визначити суму від’ємних елементів`
root.appendChild(task1)
vidp1 = document.createElement('p')
vidp1.innerHTML = `Сумма = ${summ}`
root.appendChild(vidp1)

// Завдання 2: Задано масив з числовими значеннями 45,65,48,52,45,-78,-96,25,14,25,45; В одновимірному масиві визначити номер максимального елемента масива.
let arr2 = [45, 65, 48, 52, 45, -78, -96, 25, 14, 25, 45],
    max = arr2[0]
    for (i = 1; i < arr2.length; i++){
        if (arr2[i] > max){
            max = arr2[i]
        }
    }
task2 = document.createElement('h4')
task2.innerHTML = `Завдання 2: Задано масив з числовими значеннями 45, 65, 48, 52, 45, -78, -96, 25, 14, 25, 45; В одновимірному масиві визначити номер максимального елемента масива.`
root.appendChild(task2)
vidp2 = document.createElement('p')
vidp2.innerHTML = `Номер максимального елемента масива: ${arr2.indexOf(max)}`
root.appendChild(vidp2)

// Завдання 3: Задано масив А, що містить 100 цілих чисел. Знайти суму елементів цього масиву.
let A = [],
    summa = 0
for (let j = 1; j <= 100; j++){
    A.push(Math.ceil(Math.random()*11)-1)
    }
for (let i = 0; i < A.length; i++){
    summa += A[i]
}
task3 = document.createElement('h4')
task3.innerHTML = `Завдання 3: Задано масив А, що містить 100 цілих чисел. Знайти суму елементів цього масиву.`
root.appendChild(task3)
vidp3 = document.createElement('p')
vidp3.innerHTML = `Сумма елементів масиву: ${summa}`
root.appendChild(vidp3)

// Завдання 4: Задано масив В, що містить 50 цілих чисел. Знайти добуток елементів масиву, що є непарними числами.
let B = [],
    dob = 1
for (let j = 1; j <= 50; j++){
    B.push(Math.ceil(Math.random()*11)-1)
    }
for (let i = 0; i < B.length; i++){
    if ( B[i] % 2 == 1){
        dob *= B[i]
    }
}
console.log(B)
console.log(dob)
task4 = document.createElement('h4')
task4.innerHTML = `Завдання 4: Задано масив В, що містить 50 цілих чисел. Знайти добуток елементів масиву, що є непарними числами..`
root.appendChild(task4)
vidp4 = document.createElement('p')
vidp4.innerHTML = `Добуток непарних елементів масиву: ${dob}`
root.appendChild(vidp4)