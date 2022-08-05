export default function home(){
    return `
    <section class="mainContainer">

    <section class="gameSettingsPage">
    <div class="gameSettingsBox">
        <h2>Set Your<br>Game Parameters</h2>
        <div class="gameSettingsOptions">
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">Java</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">Javascript</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">HTML</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">CSS</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">C#</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
            <div class="langLvlCombo">
                <div class="llc">
                    <input type="checkbox">
                    <label for="">Python</label>
                </div>
                <div class="llc">
                    <label for="">Level:</label>
                    <input type="number" min="1" max="3">
                </div>
            </div>
        </div>
            <button class="settingsSubmit">Submit</button>
    </div>
</section>
</section>

    `
}