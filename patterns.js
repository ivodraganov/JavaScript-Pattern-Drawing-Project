// JavaScript Pattern Drawing Project
// Using prompt-sync -> npm install prompt-sync
while (true) {
    // Step 1: Display a menu to the user
    console.log("🌟 Welcome to the JavaScript Pattern Drawing Program!");
    console.log("Choose a pattern type:");
    console.log("1. Right-angled Triangle");
    console.log("2. Square with Hollow Center");
    console.log("3. Diamond");
    console.log("4. Left-angled Triangle");
    console.log("5. Hollow Rhombus");
    console.log("6. Pyramid");
    console.log("7. Reverse Pyramid");
    console.log("8. Rectangle with Hollow Center");

    // Step 2: Get the user's choice
    const prompt = require("prompt-sync")({ sigint: true });
    const choice = parseInt(prompt("Enter the number corresponding to your choice: "), 10);

    // Step 3: Get dimensions based on choice
    let rows = 0, width = 0, height = 0;
    let str = "";
    let symbol = "*";

    if (choice >= 1 && choice <= 7) {
        rows = parseInt(prompt("Enter the number of rows: "), 10);
    } else if (choice === 8) {
        width = parseInt(prompt("Enter the width of the rectangle: "), 10);
        height = parseInt(prompt("Enter the height of the rectangle: "), 10);
    } else {
        console.log("❌ Invalid choice! Please restart the program.");
        continue;
    }

    // Step 4: Generate the selected pattern
    switch (choice) {
        case 1: // Right-angled Triangle
            // row get upside
            for (let i = 1; i <= rows; i++) {
                str += symbol.repeat(i) + "\n";
            }
            console.log("\n" + str);
            break;

        case 2: // Square with Hollow Center
            for (let i = 1; i <= rows; i++) {
                for (let j = 1; j <= rows; j++) {
                    if (i === 1 || i === rows || j === 1 || j === rows) {
                        str += "*";
                    }
                    else { str += " "; }
                }
                str += "\n";
            }
            console.log("\n" + str);
            break;

        case 3: // Diamond
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= rows - i; j++) {
                    row += " ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    row += "*";
                }
                str += row + "\n";
            }
            for (let i = rows - 1; i >= 1; i--) {
                let row = "";
                for (let j = 1; j <= rows - i; j++) {
                    row += " ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    row += "*";
                }
                str += row + "\n";
            }
            console.log("\n" + str);
            break;

        case 4: // Left-angled Triangle
            for (let i = rows; i >= 1; i--) {
                let row = "";
                for (let j = 1; j <= i; j++) {
                    str += "* ";
                }
                str += "\n";
            }
            console.log("\n" + str);
            break;

        case 5: // Hollow Rhombus
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= rows - i; j++) {
                    row += " ";
                }
                for (let j = 1; j <= rows; j++) {
                    if (j === 1 || j === rows || i === 1 || i === rows) {
                        row += "*";
                    } else {
                        row += " ";
                    }
                }
                str += row + "\n";
            }
            console.log("\n" + str);
            break;

        case 6: // Pyramid
            for (let i = 1; i <= rows; i++) {
                let row = "";
                for (let j = 1; j <= rows - i; j++) {
                    row += " ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    row += "*";
                }
                str += row + "\n";
            }
            console.log("\n" + str);
            break;

        case 7: // Reverse Pyramid
            for (let i = rows; i >= 1; i--) {
                let row = " ";
                for (let j = 1; j <= rows - i; j++) {
                    row += " ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    row += "*";
                }
                str += row + '\n';
            }
            console.log("\n" + str);
            break;

        case 8: // Rectangle with Hollow Center
            if(height < 2 || width < 2) {
                console.log("Width and height must be at least 2 to create a hollow rectangle.");
                break;
            }
            for(let i = 0; i < height; i++) {
                if(i === 0 || i === height - 1) {
                    str += symbol.repeat(width) + "\n";
                }
                else {
                    str += symbol + " ".repeat(width - 2) + symbol + "\n";
                }
            }
            console.log("\n" + str);
            break;

        default:
            console.log("❌ Invalid choice! Please restart the program.");
            break;
    }

    // Step 5: Optional - Allow the user to restart or exit
    const restartChoice = prompt("Do you want to restart the program? (y/n)").toLowerCase();
    if (restartChoice !== "y") {
        console.log("👋 Thanks for using the JavaScript Pattern Drawing Program! Goodbye!");
        break;
    }
}