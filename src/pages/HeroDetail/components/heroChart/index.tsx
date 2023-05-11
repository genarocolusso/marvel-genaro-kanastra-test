import Chart from "react-apexcharts";
import * as S from "./styles";
interface HeroDataProps {
  HeroData:
    | {
        comics: number;
        series: number;
        stories: number;
      }
    | undefined;
}
export const HeroChart = (herodata: HeroDataProps) => {
  if (herodata.HeroData) {
    const heroData = Object.values({ ...herodata.HeroData });

    const hasOnlyZero = heroData.find((value) => value > 0) ?? null;

    const heroesLabels = Object.keys({ ...herodata.HeroData });
    if (hasOnlyZero) {
      const data = {
        series: [
          {
            name: "collection",
            data: heroData,
            color: "#0df775",
          },
        ],
        options: {
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          tooltip: {
            enabled: false,
          },
          xaxis: {
            categories: heroesLabels,
          },

          fill: {
            opacity: 1,
            type: "gradient",
            gradient: {
              shade: "dark",
              opacityFrom: 0.4,
              opacityTo: 0.9,
            },
          },
          yaxis: {},
        },
      };

      return (
        <S.Container>
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            height={"100%"}
          />
        </S.Container>
      );
    }
  }

  return <></>;
};
