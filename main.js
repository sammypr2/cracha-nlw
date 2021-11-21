const LinksSocialMedia = {
  github: 'sammypr2',
  youtube: 'channel/UCHMLiAnbW-sG2a_yU_7-LsA',
  discord: 'Samantha#5368',
  instagram: 'sammy.pr2',
  twitter: 'jakelinytec'
}
function changeTitle() {}
function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Olivia'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

// i = i + 1
// i++
// 012345...
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userTitle.textContent = `${data.name} - DoWhile 2021`
    })
}
getGithubProfileInfos()
document.getElementById('discordImage').addEventListener('click', discordImage)

function copyTest() {
  var textDiscordTag = 'Samantha#5368'

  navigator.clipboard.writeText(textDiscordTag)
  /* alert('Copied!!' + textDiscordTag) */
  var popup = document.getElementById('myPopup')
  popup.classList.toggle('show')
}
