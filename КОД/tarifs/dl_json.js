  // Загружаем данные из JSON
  fetch('trainings.json')
  .then(response => response.json())
  .then(data => {
    // Получаем div-элемент по id "trainings"
    const trainingsDiv = document.getElementById('trainings');

    // Для каждого тренинга создаем HTML-элементы и добавляем их в div-элемент
    data.trainings.forEach(training => {
      const h1 = document.createElement('h1');
      h1.className = training.class;
      h1.innerHTML = `<span>${training.name}</span>`;
      trainingsDiv.appendChild(h1);

      const div = document.createElement('div');
      div.className = training.info.class;
      trainingsDiv.appendChild(div);

      const sessions = training.info.sessions;
      const p1 = document.createElement('p');
      p1.className = 'kol';
      p1.innerHTML = sessions.name;
      div.appendChild(p1);

      const p2 = document.createElement('p');
      p2.className = 'cena';
      p2.innerHTML = sessions.price;
      div.appendChild(p2);

      const p3 = document.createElement('p');
      p3.className = 'val';
      p3.innerHTML = sessions.currency;
      div.appendChild(p3);

      const button = document.createElement('button');
      button.innerHTML = training.info.button;
      div.appendChild(button);
    });
  });