

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const education = [
  {
    title: "Software Engineering",
    des: "ALX & Holberton School",
    period: "May, 2023 - Nov, 2024",
    tech: [
      {
        title: "Backend programming in Javascript",
        description: "Node JS"
      },
      {
        title: "Data structures and algorithms",
        description: "Python"
      },
      {
        title: "Low-level programming",
        description: "C Programming"
      },
      {
        title: "Relational and non-relational databases",
        description: "SQL & MongoDB"
      },
    ]
  },
  {
    title: "DevOps Engineering",
    des: "Moringa School",
    period: "Software Engineering",
    tech: [
      {
        title: "Backend programming in Javascript",
        description: "Node JS"
      },
      {
        title: "In memory datastores",
        description: "Redis"
      },
      {
        title: "Data structures and algorithms",
        description: "Python"
      },]
  },
  {
    title: "Mathematics and Computer Science",
    des: "Software Engineering",
    period: "Aug, 2016 - Nov, 2021",
    tech: [
      {
        title: "Backend programming in Javascript",
        description: "Node JS"
      },
      {
        title: "In memory datastores",
        description: "Redis"
      },
      {
        title: "Data structures and algorithms",
        description: "Python"
      },]
  }
]

export default function Edu() {
  return (
    <div className="md:flex gap-2">

      {education.map((value, index) => {
        return (
          <Drawer>
            <DrawerTrigger asChild>

              <Card key={index} className="w-[350px] bg-accent hover:ring hover:shadow-lg ease-in-out cursor-pointer">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.des}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    {value.tech.map((tech_value, index) => (
                      <ul key={index}>
                        <li>
                          {tech_value.title}
                        </li>
                        <li>
                          {tech_value.description}
                        </li>
                      </ul>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <CardDescription>
                    {value.period}
                  </CardDescription>
                </CardFooter>
              </Card>
            </DrawerTrigger>
            <DrawerContent className="h-1/2">
              <DrawerHeader>
                <DrawerTitle>

                  {value.title}
                  <DrawerDescription>
                  </DrawerDescription>
                  {value.des}
                </DrawerTitle>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        )
      })}
    </div>

  )
}
