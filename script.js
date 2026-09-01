const recommendations = {

    beach: [

        {
            name: "Maldives Beach",
            description:
                "The Maldives is famous for beautiful white sandy beaches, clear blue water and tropical scenery.",

            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Bora Bora Beach",
            description:
                "Bora Bora is a tropical destination known for turquoise water, beautiful beaches and relaxing island views.",

            image:
                "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80"
        }

    ],

    beachess: [

        {
            name: "Maldives Beach",
            description:
                "The Maldives is famous for beautiful white sandy beaches, clear blue water and tropical scenery.",

            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Bora Bora Beach",
            description:
                "Bora Bora is a tropical destination known for turquoise water, beautiful beaches and relaxing island views.",

            image:
                "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80"
        }

    ],

    beaches: [

        {
            name: "Maldives Beach",
            description:
                "The Maldives is famous for beautiful white sandy beaches, clear blue water and tropical scenery.",

            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Bora Bora Beach",
            description:
                "Bora Bora is a tropical destination known for turquoise water, beautiful beaches and relaxing island views.",

            image:
                "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=900&q=80"
        }

    ],

    temple: [

        {
            name: "Taj Mahal",
            description:
                "The Taj Mahal in India is one of the world's most famous historical landmarks.",

            image:
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Angkor Wat",
            description:
                "Angkor Wat in Cambodia is a magnificent ancient temple complex.",

            image:
                "https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&w=900&q=80"
        }

    ],

    temples: [

        {
            name: "Taj Mahal",
            description:
                "The Taj Mahal in India is one of the world's most famous historical landmarks.",

            image:
                "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
        },

        {
            name: "Angkor Wat",
            description:
                "Angkor Wat in Cambodia is a magnificent ancient temple complex.",

            image:
                "https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&w=900&q=80"
        }

    ]

};


function searchRecommendations() {

    const searchInput =
        document.getElementById("searchInput");

    const results =
        document.getElementById("results");

    const searchTerm =
        searchInput.value.trim().toLowerCase();


    if (searchTerm === "") {

        results.innerHTML = `
            <p class="instruction">
                Please enter a search term.
            </p>
        `;

        return;
    }


    let selectedRecommendations = null;


    /*
     * The assignment specifically requires
     * the word "beach" to return at least
     * two beach recommendations.
     */

    if (searchTerm.includes("beach")) {

        selectedRecommendations =
            recommendations.beach;

    }

    else if (searchTerm.includes("temple")) {

        selectedRecommendations =
            recommendations.temple;

    }


    if (!selectedRecommendations) {

        results.innerHTML = `
            <p class="instruction">
                No recommendations found for
                "<strong>${searchTerm}</strong>".
                Try searching for
                <strong>beach</strong> or
                <strong>temple</strong>.
            </p>
        `;

        return;
    }


    results.innerHTML = "";


    selectedRecommendations.forEach(function(place) {

        const card =
            document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <img
                src="${place.image}"
                alt="${place.name}"
            >

            <div class="card-content">

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.description}
                </p>

            </div>

        `;


        results.appendChild(card);

    });

}


function clearResults() {

    document.getElementById("searchInput").value = "";

    document.getElementById("results").innerHTML = `

        <p class="instruction">

            Search for a destination to see
            recommendations.

            Try typing
            <strong>beach</strong>.

        </p>

    `;

}
