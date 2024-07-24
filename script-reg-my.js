document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('education').addEventListener('change', function () {
        document.getElementById('other_education').style.display = Array.from(this.selectedOptions).some(option => option.value === 'other') ? 'block' : 'none';
    });

    document.getElementById('university').addEventListener('change', function () {
        document.getElementById('other_university').style.display = this.value === 'other' ? 'block' : 'none';
    });

    document.getElementById('current_profession').addEventListener('change', function () {
        document.getElementById('other_profession').style.display = this.value === 'other' ? 'block' : 'none';
    });

    document.getElementById('relationship_commitment').addEventListener('change', function () {
        document.getElementById('other_commitment').style.display = Array.from(this.selectedOptions).some(option => option.value === 'other') ? 'block' : 'none';
    });

    document.getElementById('cultural_identity').addEventListener('change', function () {
        document.getElementById('benefits_challenges_group').style.display = this.value === 'mix_of_cultures' ? 'block' : 'none';
    });

    document.getElementById('gender_identity').addEventListener('change', function () {
        document.getElementById('other_gender_identity').style.display = this.value === 'other' ? 'block' : 'none';
    });

    document.getElementById('sexual_orientation').addEventListener('change', function () {
        document.getElementById('other_sexual_orientation').style.display = this.value === 'other' ? 'block' : 'none';
    });

    document.getElementById('significant_life_events').addEventListener('change', function () {
        document.getElementById('impact_of_events_group').style.display = this.value !== 'no' ? 'block' : 'none';
    });

    document.getElementById('rulesEngagement').addEventListener('click', function () {
        document.getElementById('rulesModal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('rulesModal').style.display = 'none';
    });

    window.onclick = function (event) {
        if (event.target === document.getElementById('rulesModal')) {
            document.getElementById('rulesModal').style.display = 'none';
        }
    };

    document.querySelector('.menu-icon').addEventListener('click', function () {
        const menuContent = document.getElementById('menuContent');
        menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}
