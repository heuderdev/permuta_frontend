"# permuta_frontend" 
"# Permuta-Front-End" 


axios.patch("{{base_url}}:{{port}}/v1/profiles/:id"),
{
  	"is_active": "ACTIVE" // ACTIVE or INACTIVE
}
}, config)




    const handleSelectChange = async (e: any) => {

        const newValue = e.target.value;
        if (newValue != selectedItem) {
            console.log(id, 'aqui');
            setSelectedItem(newValue)

            await Api.patch(`/profiles/${id}`, { is_active: newValue })
        };
    }