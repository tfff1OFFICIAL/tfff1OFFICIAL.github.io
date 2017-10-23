import os, json, urllib.request, random, math
# Properties:
propsLoc = os.path.dirname(os.path.realpath(__file__)) + "\cipherProperties.json"
if os.path.exists(propsLoc) != True:
    print("No properties found, generating a default one.")
    file = open(propsLoc, "w")

    file.write("{\n")
    file.write('"letters": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],\n')
    file.write('"dummies": [],\n') #Dummies are characters that are ignored in reading, and in writing are randomly placed throughout the document.
    file.write('"dummyPercentage": 20,\n')
    file.write('"isMultiLine": false,\n') #whether or not to expect multiline input or multiple single line inputs
    file.write('"convertCase": true\n') #See Gihub issue #2: https://github.com/tfff1OFFICIAL/Basic-Cipherer/issues/2 - Upper / Lower case
    file.write("}")
    file.close()
    print("Done!")
valueLetters = [""]
dummyLetters = []

#Read Properties:
with open(propsLoc) as file:
        properties = json.load(file)
        print("Successfully loaded properties with %s letters and %s dummies. Multiline Input is %s"%(len(properties["letters"]), len(properties["dummies"]), properties["isMultiLine"]))

for letter in properties["letters"]:
    valueLetters.append(letter)
for dummy in properties["dummies"]:
    dummyLetters.append(dummy)
convertCase = properties["convertCase"]
isMultiLine = properties["isMultiLine"]
dummyPercentage = properties["dummyPercentage"]

def getNumber(letter):
    return valueLetters.index(letter)

def count(value, toCount):
    out = value
    count = toCount
    while count > 0:
        if out != len(valueLetters) - 1:
            out += 1
        else:
            out = 1
        count -= 1
    #print(out)
    return out

def getLetter(number):
    return valueLetters[number]

def out(toOut):
    if isMultiLine == False:
        print(toOut)
    else:
        delayedOut.append(toOut)

delayedOut = []

n = " "
prevLine = " "
while n != "":
    if prevLine == " ":
        prevLine = n
    elif isMultiLine == False:
        prevLine = n
    n = str(input())
    if n != "":
        if prevLine.isdigit() == True and len(n) > 0:
            delayedLine = ""
            for letter in n:
                if convertCase == True:
                        #Convert to lower case:
                        try:
                            letter = letter.lower()
                        except:
                            print()
                if letter in valueLetters:
                    #If the letter is an allowed character then:
                    delayedLine += getLetter(count(getNumber(letter), int(prevLine)))
                #Lets numbers through, as long as they aren't dummy letters:
                elif letter.isdigit() == True and letter not in dummyLetters:
                    delayedLine += letter
                #Ignores dummy Letters:
                elif letter not in dummyLetters:
                    delayedLine += letter
                #Do some fancy prevLine stuff:
                if int(prevLine) + 1 > len(valueLetters) - 1:
                    prevLine = str(1)
                else:
                    prevLine = str(int(prevLine) + 1)
                #print("PrevLine is: %s"%prevLine)
            if len(dummyLetters) > 0:
                dummyCount = math.ceil((dummyPercentage / 100) * len(delayedLine))
                while dummyCount > 0:
                    index = random.randint(0, (len(delayedLine) - 1))
                    delayed = delayedLine[:index] + dummyLetters[random.randint(0, len(dummyLetters) - 1)] + delayedLine[index:]
                    #delayedLine.insert(random.randint(0, len(delayedLine), dummyLetters[random.randint(0, len(dummyLetters))]))
                    dummyCount -= 1
                    delayedLine = delayed
            out(delayedLine)
        #Multiple Conversions on the same string (piling conversion on top of conversion):
        elif len(prevLine) > 1 and " " in prevLine:
            runningN = n
            splitPrev = prevLine.split(" ")
            for prev in splitPrev:
                if prev.isdigit() == True: 
                    delayedLine = ""
                    for letter in runningN:
                        if convertCase == True:
                            #Convert to lower case:
                            try:
                                letter = letter.lower()
                            except:
                                print()
                        if letter in valueLetters:
                            #If the letter is an allowed character then:
                            delayedLine += getLetter(count(getNumber(letter), int(prev)))
                        #Lets numbers through, as long as they aren't dummy letters:
                        elif letter.isdigit() == True and letter not in dummyLetters:
                            delayedLine += letter
                        #Ignores dummy Letters:
                        elif letter not in dummyLetters:
                            delayedLine += letter
                        #Do some fancy prev stuff:
                        if int(prev) + 1 > len(valueLetters) - 1:
                            prev = str(1)
                        else:
                            prev = str(int(prev) + 1)
                        #print("prev is: %s"%prev)
                    runningN = delayedLine
            out(runningN)
        #Checking for conversions:
        

for line in delayedOut:
    print(line)