name = input("Enter your name: ")
last_name = input("Enter your last name: ")
print("Hello " + name + " " + last_name + "!")
color = input("What is your favourite color?")
film = input("What is your favourite film?")
print("You like color " + color + " " + "and film " + film)
print("Me too!")

name = input("Enter your name: ")
last_name = input("Enter your last name: ")
years = input("How old are you?")
work = input("How long have you been teaching?")
print("Hello " + name + " " + last_name + "!" "You are " + str(years) + " " + "and teaching for " + str(work) + " years")

#Getting the length from the user
length = int(input("What is the length of the rectangle?"))
width = int(input("What is the width of the rectangle?"))
perimeter = 2 * (length + width)
print("The perimeter is " + str(perimeter))

#Finding the Radius
import math

length = int(input("length:"))
width = int(input("Width:"))
perimeter = 2 * (length + width)
print(" The perimeter is " + str(perimeter));

radius = int(input("Radius:"))
height = int(input("Height:"))
Vol = int (math.pi * (radius**2)*height)
print(" The volume of this cylinder is " + str(Vol));

#For Loops
for dog in range (3):
    print("hi!")
for x in range (0,5):
    print(x)
for x in range (1,7):
    print(x)
for x in range (1,10,2):
    print(x)
for x in range (30,10,-3):
    print(x)

#HOMEWORK
#1
for x in range (10,80,10):
    print(x)
#2 Python's range() can only do integers, not floating point.
#It is not possible to get the floating point sequence using range(),
#but it is possible using NumPy arange()
for x in range(0, 21):
    print(x/2)
#3
z = "bottles of beer on the wall"
for x in range (99,0,-1):
    print(str(x) + " "+ z)

#CLASSWORK
number = int(input("Enter any number: "))
if number >= 5:
    print("grater than or equal to 5!")
else:
    print("This number is less than 5!")

#practice 2
number = int(input("Enter your age: "))
if number >= 21:
    print("Congrats! You can drive, vote, and drink.")
elif number >= 18:
    print("Congrats! You can vote")
elif number >= 16:
    print("Congrats! You can drive.")
else:
    print("Sorry, you can't drive, drink, or vote at this age!")

#practice 3
#version1
response = input("Have you ordered delivery?")
if response == "yes":
    print("Great!")
else:
    print("No?! So who's cooking?")
#version2
response = input("Have you ordered delivery?")
if response == "yes":
    cost = int(input("How much is your order?"))
    people = int(input("How many people?"))
    total = (cost/2)
    x = "The cost per person is"
    print(x + " " + str(total))
else:
    print("No?! So who's cooking?")

#practice 4
#guessing game
#random
import random
user_score = 0
response = int(input("How many rolls do you want to play?"))
for i in range (response):
    x = random.randint(1,6)
    guess = int(input("Take a guess 1-6:"))
    if response == x:
        print("Your guess was", guess)
        print("The correct roll was", x)
        print("You earned 6 points")
        user_score += 6
    else:
        user_score -= 1
#print("Final score = ", user_score)
print("Your final score is {} ".format(user_score))

#WHILE Loops
count = 0
while count < 5:
    print("hi!")
    count += 1
print("Good Bye!")
#asking user for password 3 times
password = 'simonsnyc'
count = 1
response = input("What is your password?")
while response!='simonsnyc' and count<3:
    count +=1
    print('Wrong Password!')
    response = input("What is your password?")
if password == 'simonsnyc' and count<3:
        print('Access granted')
else:
    print('Access denied. Try again.')

#LISTS
bikes=["Treck", "Redline"]
print(bikes)
#up to 3 items from the list
bikes=["Treck", "Redline", "Apple", "Selena"]
print(bikes[0:3])
#loop through each item
bikes=["Treck", "Redline", "Apple", "Selena"]
for item in bikes:
    print("I really like" + item)

#practice 2
numbers=[1,2,3,2,1]
numbers.remove(2)
print(numbers)
#practice 3 adding items from array
prices = [1.95, 4.50, 0.99, 5.99]
sum = 0
for item in prices:
    sum = sum + item
    print(sum)
#practice 3
prices = []
item = int(input("How many prices do you want to add?"))
sum = 0
for i in range(item):
    price = int(input("Price: "))
    prices.append(price)
    sum += price
print("Prices:", prices)
print("Total Price: ", sum)
#practice 4 Receipt
prices = []
names = []
item = int(input("How many prices do you want to add?"))
sum = 0
for i in range(item):
    name = str(input("Name: "))
    names.append(name)
    price = int(input("Price: "))
    prices.append(price)
    sum += price
print("Receipt:")
for i in range(len(names)):
    print("Item:", names[i], "Price:", prices[i])
print("Item prices:", prices)
print("Total Price: ", sum)

#FUNCTIONS
#practice 1 asking for input and calculating
num1 = int(input("Enter a number"))
num2 = int(input("Enter a number"))
num3 = int(input("Enter a number"))
def sum1():
    total = num1+num2+num3
    return total
def avg():
    average = (sum1()/3)
    print("The sum is", sum1())
    print("The average is:", average)
avg()

#HOMEWORK
def sum1(num_list):
    total = 0
    for i in range(len(num_list)):
        total += num_list[i]
    return total

def avg(num_list):
    total = 0
    for i in range(len(num_list)):
        total += num_list[i]
    return total/len(num_list)

num_list = []
m = int(input("How many numbers do you want to enter? "))
for i in range(m):
    n = int(input("Enter a number: "))
    num_list.append(n)

sum1 = sum1(num_list)
avg = avg(num_list)
s = "Your original numbers were "
for i in range(len(num_list)):
    if i != len(num_list) - 1:
        s += str(num_list[i]) + ", \n "
    else:
        s += str(num_list[i]) + ". "
s += "The sum of your numbers was " + str(sum1) + "\n and the average was " + str(avg) + "."
print(s)

#Guess my color game
#Guess my color
import random

user_score = 0
colors = ['red', 'blue', 'black', 'pink']
x = random.randint(0,len(colors)-1)
guess = input('Guess a color Red, Blue, Black, Pink: ')

for color in colors[x]:
    if guess != colors[x]:
        print('Try again!')
        guess = input('Guess a color Red, Blue, Black, Pink: ')
        user_score -= 2
    elif guess == colors[x]:
        user_score += 6
        break

print('Congrats, you win! Color was: ' + colors[x])
print('Your final score is {} '.format(user_score))

##GROUP PROJECT CHOOSE FROM 4 GAMES
import random


#Rashon
def blackjack():
    user = [];
    comp = [];
    def gameplay():
        user.append(random.randint(1,10));
        comp.append(random.randint(1,10));
        print("User score: " + str(updateSum(user)));
        print("Comp score: " + str(updateSum(comp)))
        stance = input("Hit or stay?");
        while stance.lower() != "stay":
            user.append(random.randint(1,10));
            print("User score: " + str(updateSum(user)));
            #print(user);
            stance = input("Hit or stay?");
        print("User score: " + str(updateSum(user)));
        compGameplay();

    def compGameplay():
        if updateSum(user) > 21:
                updateSum(comp);
        elif updateSum(user) <= 21:
            while updateSum(comp) < updateSum(user):
                comp.append(random.randint(1,10));
                print("Comp score: " + str(updateSum(comp)));
                print(comp);
        else:
            doNothing();

    def updateSum(cards):
        total = 0;
        bust = False;
        if total <= 21:
            for x in range(len(cards)):
                total = total + cards[x];
            if total > 21:
                total = 99;
        print(total);
        return total;
    def doNothing():
        1+1;
    def main():
        gameplay();
    main();
#Oksana
def guessColor():
    user_score = 0
    colors = ['red', 'blue', 'black', 'pink']
    x = random.randint(0,len(colors)-1)
    guess = input('Guess a color Red, Blue, Black, Pink: ')

    for color in colors[x]:
        if guess != colors[x]:
            print('Try again!')
            guess = input('Guess a color Red, Blue, Black, Pink: ')
            user_score -= 1
        elif guess == colors[x]:
            user_score += 6
            break

    print('Congrats, you win! Color was: ' + colors[x])
    print('Your final score is {} '.format(user_score))
 #Chang Liu
def rockPaperSci():
    user = input("Enter a choice (rock, paper, scissors): ")
    computer = ["rock", "paper", "scissors"]
    computer = random.choice(computer)
    print(f"\nYou chose {user}, computer chose {computer}.\n")

    if user == computer:
        print(f"Both players selected {user}. It's a tie!")
    elif user == "rock":
        if computer == "scissors":
            print("Rock smashes scissors! You win!")
        else:
            print("Paper covers rock! You lose.")
    elif user == "paper":
            if computer == "rock":
                print("Paper covers rock! You win!")
            else:
                print("Scissors cuts paper! You lose.")
    elif user == "scissors":
            if computer == "paper":
                    print("Scissors cuts paper! You win!")
            else:
                    print("Rock smashes scissors! You lose.")

#Lily
def diceroll():
    rolls = int(input("How many rolls would you like to play?"))
    points = 0

    for i in range(rolls):
        x = random.randint(1,6)
        guess = int(input("Guess 1-6:"))
        if guess == x:
            print("Your guess was", guess)
            print("The correct roll was", x)
            print("You earned 6 points")
            points += 6
        else:
            print("Your guess was", guess)
            print("The correct roll was", x)
            print("You lost 1 point")
            points -= 1

    print("Final score =", points)


def ready_player1():
    player = input("Welcome to Game Master 4! Do you want to play a game? (y/n)")
    while player == "y":
            game_choice = int(input("Which game do you want to play? Blackjack, Guess Color, Rock Paper Scissors, Dice Roll (1/2/3/4): "))
            if game_choice == 1:
                blackjack()
            elif game_choice == 2:
                guessColor()
            elif game_choice == 3:
                rockPaperSci()
            elif game_choice == 4:
                diceroll()
            player = input("Do you want to keep playing? (y/n)")
    else:
        print("Game Over!")
ready_player1()
## Artem's gameplay
import random

# Artem
def coinToss(points):
    print("Welcome to Coin Toss")
    print("Rules: earn 1 point for heads and lose 1 point for tails")
    play = True
    while play:
        number = int(input("Number of times to flip coin: "))
        heads = 0
        tails = 0
        recordList = []
        for flip in range(number):
            coinFlip = random.choice([1, 2])

            if coinFlip == 1:
                print("Heads -- Earned 1 point")
                points += 1
                recordList.append("Heads")
            else:
                print("Tails -- Lost 1 point")
                points -= 1
                recordList.append("Tails")

        print("Total Points:", points)
        user_play = input("Would you like to keep playing Coin Toss? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Coin Toss!!! \n")
            return points
            play = False

# Joyce
def math_game(points):
    print("Welcome to Math Practice Problems")
    play = True
    while play:
        x = random.randint(0,99)
        y = random.randint(0,99)
        rand_op = random.randint(1,4)
        if rand_op == 1:
            op = "+"
            ans = x+y
        elif rand_op == 2:
            op = "-"
            ans = x-y
        elif rand_op == 3:
            op = "*"
            ans = x*y
        else:
            op = "/"
            ans = x/y

        user_ans = float(input("Solve: " + str(x) + op + str(y) + " = "))

        if user_ans == ans:
            print("CORRECT!! You earned 1 point")
            points += 1
        else:
            print("WRONG!! You lost 1 point")
            points -= 1
        print("Total Points:", points)

        user_play = input("Would you like to keep playing Math Practice Problems? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Math Practice Problems!!! \n")
            return points
            play = False

#Tisha Austin
def guessColor(points):
    print ("Welcome to Guess the Color")
    print("Rules: earn 1 point correct color, lose 1 point for wrong color")

    colors = ["red", "yellow", "pink", "green"]
    play = True
    while play:
        # computer randomly picks a color from colors
        color_code = random.sample(colors,1)
        guess = input("Guess the color: (red/yellow/pink/green)")
        if guess == color_code[0]:
            print("Correct Color:", color_code[0], "Your Guess:", guess)
            print("CORRECT!! You earned 1 point")
            points += 1
        else:
            print("Correct Color:", color_code[0], "Your Guess:", guess)
            print("WRONG!! You lost 1 point")
            points -= 1
        print("Total Points:", points)

        user_play = input("Would you like to keep playing Guess the Color? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Guess the Color!!! \n")
            return points
            play = False

#Ida
#rock paper scissors player1 vs player2
def rockPaperScissors(points):
    print ("Welcome to Guess the Color")
    print("Rules: earn 1 point if you win, lose 1 point if you lose")
    play = True
    while play:
        rand_comp = random.randint(1,3)
        if rand_comp == 1:
            comp = "rock"
        elif rand_comp == 2:
            comp = "paper"
        else:
            comp = "scissors"

        user = input("Pick either rock, paper, or scissors")

        if user.lower() == comp:
            print("You chose:", user, "Computer chose:", comp)
            print("Its a tie -- No points")
        elif user.lower() == "rock" and comp == "scissors":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        elif user.lower() == "paper" and comp == "rock":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        elif user.lower() == "scissors" and comp == "paper":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        else:
            print("You chose:", user, "Computer chose:", comp)
            print("You lost -- You lost 1 point")
            points -= 1

        print("Total Points:", points)

        user_play = input("Would you like to keep playing Rock Paper Scissors? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Rock Paper Scissors!!! \n")
            return points
            play = False

points = 0
print("JATI Games:")
print("1. Coin Toss")
print("2. Math Practice Problems")
print("3. Guess the Color")
print("4. Rock Paper Scissors \n")
keep_playing = True
while keep_playing:
    game = int(input("Which game do you want to play? (1/2/3/4)"))
    if game == 1:
        points = coinToss(points)
    elif game == 2:
        points = math_game(points)
    elif game == 3:
        points = guessColor(points)
    else:
        points = rockPaperScissors(points)

    user_kp = input("Would you like to keep playing JATI Games? (y/n)")
    if user_kp.lower() == "y":
        keep_playing = True
    else:
        print("Thank you for playing JATI Games!!!")
        keep_playing = False
### How well you know Python GAME?
points= 100
def answer(qu, ca, wa):
  print(qu)
  start= int(input("1 or 2: "))
  global points
  if start==wa:
    points -=10
    print("Oh no, bad choice! Current points: " + str(points) +"\n")
  else:
    print("Correct! On to next question!\n")

print("Welcome to Python Challenge!\n" )
print("We will start with 100 points. Answer a few Python questions.\nMinus 10 for every wrong answer, and 0 points deducted if you\nare correct.")

start= int(input("Ready? Enter 1 for yes and 0 for no: "))


if start==1:
    answer("\nWho named the language python?\n 1. Guido van Rossum\n 2. Monty Python\n",1,2)

    answer("In python, we need to specify variable type when declaring it. \n 1. True \n 2. False\n",2, 1)

    answer(" Socks= ('Dino', 'Panda', 'Kitty', 'Ducky' is an exampe of?1 \n 1. String list \n 2. Tuple\n",2,1)

    answer("\nBinary and set are built in data types for python. \n 1. True\n 2. False\n",1,2)

    answer("\nWhat is (((2**1)**3)**2)? \n 1. 64\n 2. 8\n",1,2)

    answer("\nx = lambda a : a + 10 \nprint(x(400))\nWhat does this code print?\n 1. lambda 410. \n 2. 410\n",2,1)

    answer("Which of these can you use to add item to sets or lists?\n 1. Add or append. \n 2. Append only\n",2,1)

    answer("In python, we connect .array() with a list to create an array \n 1. True. \n 2. False\n",2,1)

    answer("Python is similar to Java in that it has classes,inheritance, and super()   \n 1. True. \n 2. False\n",1,2)

    print("You know python "+ str(points) + " % well!")

else:
  print("Aww, oky! Maybe next time.")


  #lab 20
minsInDay = 60*24
days, mins = divmod(5345, minsInDay)
print(days,"days", mins, "mins")

#or
days, mins = divmod(5345, 1440)
print(days,"days", mins, "mins")
#outputs 3 days 17 hours 5 mins
