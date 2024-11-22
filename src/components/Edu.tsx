

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const education = [
    {
        title: "Software Engineering",
        des: "Software Engineering",
        period: "Software Engineering",
        tech: [
            "Node JS"
        ]
    },
    {
        title: "Software Engineering",
        des: "Software Engineering",
        period: "Software Engineering",
        tech: [
            "Node JS"
        ]
    },
    {
        title: "Software Engineering",
        des: "Software Engineering",
        period: "Software Engineering",
        tech: [
            "Node JS"
        ]
    }
]

export default function Edu() {
  return (
    <div className="md:flex gap-2">
        {education.map((value, index) => {
            return (
                <Card className="w-[350px] bg-accent">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.des}</CardDescription>
                </CardHeader>
                <CardContent>
                  
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            )
        })}
    </div>
   
  )
}
