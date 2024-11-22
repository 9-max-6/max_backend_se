import { Button } from "./ui/button"

function Navbar() {
  return (
    <div>
        <ul className="flex w-full">
        <li>
                <Button variant="ghost">
                    Home
                </Button>
        </li>
        <div className="ml-auto flex space-between gap-6 lg:gap-12">
            <li>
                <Button variant="ghost">
                    Education
                </Button>
            </li>
            <li>
                <Button variant="ghost">
                    Projects
                </Button>
            </li>
            <li>
                <Button variant="ghost">
                    Interests
                </Button>
            </li>
            <li>
                <Button>
                    Hire me
                </Button>
            </li>
        </div>
        </ul>
    </div>
  )
}

export default Navbar