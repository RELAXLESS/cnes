const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "<span class='response'>I love you too!</span>";
    gif.src = "https://media.giphy.com/media/kZqbBT64ECtjy/giphy.gif"; // Updated GIF URL
    yesBtn.style.display = 'none'; // Hide the Yes button
    noBtn.style.display = 'none'; // Hide the No button as well
});

// Make the No button move randomly when clicked
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const wrapper = document.querySelector(".wrapper");
    const noBtnRect = noBtn.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.random() * maxX; // Random X position
    const randomY = Math.random() * maxY; // Random Y position

    // Set the new position
    noBtn.style.position = 'absolute'; // Ensure it can be positioned absolutely
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}
