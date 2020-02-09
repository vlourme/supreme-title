var figlet = require('figlet');
const chalk = require('chalk');

/**
 * Make It Supreme
 */
module.exports = class Supreme {
    /**
     * Display a text at the center (horizontal and vertical)
     * 
     * @param { string } text 
     */
    writeCenter(text) {
        // Get console size
        const width = process.stdout.columns
        const height = process.stdout.rows

        // Get lines
        const lines = text.split("\n")

        // Vertically center
        for (let i = 0; i < height / 2 - lines.length; i++) {
            console.log("")
        }

        // Display lines
        lines.forEach(element => {
            console.log(" ".repeat(Math.abs(width - element.length) / 2) + element)
        });

        // Pad again
        for (let i = 0; i < height / 2 - lines.length; i++) {
            console.log("")
        }
    }

    /**
     * Creates a Supreme style text
     * @param {string} text 
     */
    makeItSupreme(text) {
        // Prepare return
        let ret = "";

        // Get text
        let data = figlet.textSync(text, {
            font: 'Slant',
            horizontalLayout: 'fitted',
            verticalLayout: 'fitted'
        })

        // Get lines
        const lines = data.split("\n")

        // Add background
        for (let i = 0; i < lines.length; i++) {
            ret += " ".repeat(6 - i) + chalk.bgRedBright(" ".repeat(3) + lines[i] + " ".repeat(3)) + "\n"
        }

        this.writeCenter(chalk.bold(ret))
    }
}