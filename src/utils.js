import { timeParse } from "d3-time-format";
import axios from "axios";

import { BE_HOST } from "./constants";

export async function getData() {
	const result = await axios.get(
		`https://fac-chart.factorychain.io/v1/chart-data`
	)

	const displayData = await result.data.data.map(item => {
		return {
			date: timeParse("%s")(item.time),
			open: item.open,
			close: item.close,
			high: item.high,
			low: item.low,
			volume: item.volume
		}
	})
	displayData.pop()
	return displayData
}

export async function getListTransaction() {
	const data = {
		"filters": {
			"pair": "0x1ad8210Bcfa0a429D5880dB79Bc88574f1a1AE62",
			"lastTimestamp": 1000000,
			"limit" : 500,
			"page" : 0
		}
	}
	const result = await axios.post(
		`${BE_HOST}/fac/pair-explorer`,
		data
	)
	console.log(result)
	return result.data
}
