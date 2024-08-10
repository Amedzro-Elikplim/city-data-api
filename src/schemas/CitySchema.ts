export const CitySchema = (sequelize: any, Sequelize: any) => {

  let City = sequelize.define("Cities", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city_ascii: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lat: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      lng: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iso2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      iso3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      timezone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      offset: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("active", "deprecated"),
        allowNull: false,
        defaultValue: "active"
      },
      createdAt: Sequelize.DATE(),
      updatedAt: Sequelize.DATE()
  })

  return City;
}