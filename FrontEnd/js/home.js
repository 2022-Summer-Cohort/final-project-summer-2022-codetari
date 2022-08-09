export default function home(){
    return `
    <section class="mainContainer">

    <section class="gameSettingsPage">
    <div class="gameSettingsBox">
        <h2>Set Your<br>Game Parameters</h2>
        <div class="gameSettingsOptions">
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="Java" class="languageInput">
                    <label for="">Java</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="Javascript" class="languageInput">
                    <label for="">Javascript</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="HTML" class="languageInput">
                    <label for="">HTML</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="CSS" class="languageInput">
                    <label for="">CSS</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="cSharp" class="languageInput">
                    <label for="">C#</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox" value="Python" class="languageInput">
                    <label for="">Python</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3" class="level">
                </div>
            </div>
        </div>
            <button class="settingsSubmit">Submit</button>
    </div>
</section>
</section>

    `
}