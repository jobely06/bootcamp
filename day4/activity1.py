friends= ["cardo","panday","fpj"]
classmates=["empoy","joshua garcia","daniel padilla"]

friends.pop(2)
print("who among your friends loves food?:", friends,"\n")

classmates.insert(0,"Kathryn")
classmates.append("nadine")
print("Name of your classmates:\n", classmates,"\n")

names =classmates + friends
print("So the students in Section gwapo are the following:\n", names,"\n","\n")

names.sort()
print("Sorted Names:",names,"\n")

result = friends is classmates
print("Same ba akong classmates ug friends?:", result,"\n")

classmates.clear()
friends.clear()
x= friends + classmates
print("Kinsay nabagsak nila?:",x)