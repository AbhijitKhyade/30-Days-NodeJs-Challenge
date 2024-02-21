
const welcome = async (req, res) => {
    try {
        const response = await fetch('url');
        console.log(response);
    } catch (error) {
        console.log(error);
      
    }
}

welcome();
console.clear();