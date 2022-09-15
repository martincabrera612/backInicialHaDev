const ModelBuilder = (sequelize, Model, DataTypes) => {
    class User extends Model {};

    User.init({
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            apellido: {
                type: DataTypes.STRING,
                allowNull: false
            },

        }, {
            sequelize: sequelize,
            modelName: "user",
        }



    );

    return User;

};
module.exports = ModelBuilder;