const PROFILE_STORAGE_KEY = "llamaShopProfile";

function loadProfile() {
    return JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY)) || {};
}

function saveProfile(profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function updatePreview(profile) {
    const previewImage = document.querySelector("#profile-preview-image");
    const previewName = document.querySelector("#profile-preview-name");
    const previewGender = document.querySelector("#profile-preview-gender");

    if (profile.picture && previewImage) {
        previewImage.src = profile.picture;
    }

    if (previewName) {
        previewName.textContent = profile.name || "Your Profile";
    }

    if (previewGender) {
        previewGender.textContent = profile.gender || "Tell us about yourself";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#profile-form");
    const nameInput = document.querySelector("#profile-name");
    const genderInput = document.querySelector("#profile-gender");
    const pictureInput = document.querySelector("#profile-picture");
    const status = document.querySelector("#profile-status");
    const savedProfile = loadProfile();

    if (savedProfile.name) {
        nameInput.value = savedProfile.name;
    }

    if (savedProfile.gender) {
        genderInput.value = savedProfile.gender;
    }

    updatePreview(savedProfile);

    pictureInput.addEventListener("change", function () {
        const file = pictureInput.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.addEventListener("load", function () {
            updatePreview({
                name: nameInput.value,
                gender: genderInput.value,
                picture: reader.result
            });
        });
        reader.readAsDataURL(file);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const file = pictureInput.files[0];
        const existingProfile = loadProfile();

        function finishSave(picture) {
            const profile = {
                name: nameInput.value.trim(),
                gender: genderInput.value,
                picture: picture || existingProfile.picture || ""
            };

            saveProfile(profile);
            updatePreview(profile);
            status.textContent = "Profile saved.";
        }

        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                finishSave(reader.result);
            });
            reader.readAsDataURL(file);
        } else {
            finishSave();
        }
    });
});
