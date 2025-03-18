
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('example1'); 
const imagePreview = document.getElementById('image-preview'); 
const defaultPreview = document.getElementById('default-preview'); 




fileInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            // imagePreview.classList.remove('hidden');
            // defaultPreview.classList.add('hidden'); 
        };
        reader.readAsDataURL(this.files[0]);
    }
});
