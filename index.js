document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json") // Fetching from Node.js API
    .then((response) => response.json())
    .then((data) => {
      console.log(data.tasks[0]);

      const data2 = data.tasks[0].assets[0];
      // const data3 = data.tasks[0].assets[1];
      // const data4 = data.tasks[0].assets[2];
      // const data5 = data.tasks[0].assets[3];

      let div = document.getElementById("hero-section");
      let title = document.createElement("p");
      title.className = "task-title";
      div.appendChild(title);
      title.textContent = data.title;

      let details = document.createElement("div");
      details.className = "task-details";
      div.appendChild(details);

      let p_tag = document.createElement("p");
      p_tag.className = "task-title1";
      let p_tag2 = document.createElement("p");
      p_tag2.className = "task-title2";
      details.appendChild(p_tag);
      details.appendChild(p_tag2);
      p_tag.textContent = data.tasks[0].task_title;
      p_tag2.textContent = data.tasks[0].task_description;

      //card 1 content
      let header_tag = document.getElementById("header-tag");
      header_tag.textContent = data2.asset_title;

      let tag_description = document.getElementById("tag-description");
      tag_description.textContent = data2.asset_description;

      let asset_content = document.getElementById("asset-content");
      asset_content.src = data2.asset_content;

      // //card 2 content
      // let header_tag2 = document.getElementById("header-tag2");
      // header_tag2.textContent = data3.asset_title;
      // let tag_description2 = document.getElementById("tag-description2");
      // tag_description2.textContent = data3.asset_description;

      // //card 3 content
      // let header_tag3 = document.getElementById("header-tag3");
      // header_tag3.textContent = data4.asset_title;
      // let tag_description3 = document.getElementById("tag-description3");
      // tag_description3.textContent = data4.asset_description;

      // //card 4 content
      // let header_tag4 = document.getElementById("header-tag4");
      // header_tag4.textContent = data5.asset_title;
      // let tag_description4 = document.getElementById("tag-description4");
      // tag_description4.textContent = data5.asset_description;




      data.tasks[0].assets.forEach((asset, index) => {
        let header_tag = document.getElementById(`header-tag${index + 1}`);
        let tag_description = document.getElementById(`tag-description${index + 1}`);
        let assetContent = document.getElementById(`asset-content${index + 1}`);

        if (header_tag) header_tag.textContent = asset.asset_title;
        if (tag_description) tag_description.textContent = asset.asset_description;
        if (assetContent && asset.asset_content) assetContent.src = asset.asset_content;       
      });

      let str = "Notice Board"; 
      let notice_board = document.getElementById('notice-board');

      function printLetterByLetter(index) {
          if (index < str.length) {
              notice_board.textContent += str[index];
              setTimeout(() => printLetterByLetter(index + 1), 200); // Delay for typing effect
          }
      }

      printLetterByLetter(0);

      
    })

    .catch((error) => console.error("Error fetching data:", error));
});
