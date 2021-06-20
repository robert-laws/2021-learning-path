function addClient(name, age, title) {
  let newClient = {
    print() {
      getClientDetails(name, age, title);
    },
  };

  return newClient;
}

function getClientDetails(name, age, title) {
  console.log(`
    Name: ${name}, age: ${age}, title: ${title}
  `);
}

export default addClient;
