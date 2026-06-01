//interface is a syntactical contract that defines the structural "shape" of an object. It tells what needs to be done, not how it needs to be done

//it defines: What methods should exist, what structure needs to be followed, no implementation logic (will contain methods name, but no body)

interface browser{
    openBrowser():void;
    closeBrowser():void;
}

class chrome implements browser{
    openBrowser(): void {
        console.log("Opening Chrome Browser");
    }

    closeBrowser(): void {
        console.log("Closing Chrome Browser");
    }
}

