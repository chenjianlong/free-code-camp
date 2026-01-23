const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (t) => {
  const diff = (Date.now() - new Date(t)) / 1000;
  if (diff < 3600) {
    return `${Math.trunc(diff/60)}m ago`;
  } else if (diff < 3600 * 24) {
    return `${Math.trunc(diff/3600)}h ago`;
  } else {
    return `${Math.trunc(diff/3600/24)}d ago`;
  }
}

const viewCount = (n) => {
  if (n < 1000) {
    return n;
  } else {
    return `${Math.trunc(n/1000)}k`;
  }
}

const forumCategory = (n) => {
  let category = "General";
  let className = "general";
  if (n in allCategories) {
    category = allCategories[n].category;
    className = allCategories[n].className;
  }
  return `<a href="https://forum.freecodecamp.org/c/${className}/${n}" class="category ${className}">${category}</a>`
}

const avatars = (posters, users) => {
  let res = "";
  posters.forEach(poster => { 
    const user = users.find(item => item.id === poster.user_id);
    const imgUrl = user.avatar_template.replace("{size}", "30")
    res += `<img alt="${user.name}" src="${avatarUrl}${imgUrl}">`;
  });

  return res;
}

const showLatestPosts = (obj) => {
  const postsContainer = document.getElementById("posts-container");
  const users = obj.users;
  const topicList = obj["topic_list"];
  const topics = topicList["topics"];

  let content = '';
  for (let i = 0; i < topics.length; ++i) {
    const topic = topics[i];
    content += `<tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>
        ${forumCategory(topic.category_id)}
      </td>
      <td><div class="avatar-container">
        ${avatars(topic.posters, users)}
      </div></td>
      <td>
        ${topic.posts_count - 1}
      </td>
      <td>
        ${topic.views}
      </td>
      <td>
        ${timeAgo(topic.bumped_at)}
      </td>
    </tr>`;
  }

  postsContainer.innerHTML = content;
}

const fetchData = async () => {
  fetch(forumLatest).then(res => res.json())
    .then(data => showLatestPosts(data))
    .catch((error) => {
      console.log(error);
    });
}

fetchData();